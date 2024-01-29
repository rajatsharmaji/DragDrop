import projects from "./project.model.js";
import { createClient } from 'redis';

const client = createClient();
client.connect().then(()=>{console.log("connected");}).catch((e)=>console.error(e));

export const getProject = async(req,res)=>{
    const uid = req.params.uid;
    const projectKey= `project:${uid}`
    const redisData = JSON.parse(await client.get(projectKey));
    console.log();
    if(redisData){
        console.log("data getting from redis");
        res.send(redisData)
    }else
        {
    const project = await projects.findOne({uid:uid});
    if(!project){
        console.log("project not found");
        res.send({msg:"project not found"})
    }
    else{
        const projectData = await project.data;
        console.log("ProjectData fetched");
        await client.set(projectKey,JSON.stringify(projectData));
        client.expire(projectKey,10);
        res.send(projectData)
    }
}
}

export const addProject = async(req,res)=>{
    const uid = req.params.uid;
    const data = req.body;
    const project = await projects.findOne({uid:uid});
    if(!project){
        const newProject = new project({
            "uid": uid,
            "data": data
        })
        await project.save();
        console.log("Project created");
        res.send({msg:"prject saved successfully"})
    }
    else{
        project.data=data;
        await project.save()
        console.log("Project Updated");
        res.send(data);
    }
}