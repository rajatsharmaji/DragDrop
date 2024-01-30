
import projects from "./project.model.js";
import { createClient } from 'redis';

const client = createClient();
client.connect().then(() => console.log("Connected to Redis"))
  .catch((e) => console.error(e));
export const getProject = async (req, res) => {
  try {
    const uid = req.params.uid;
    console.log("Rq Header",req.headers);
    const projectKey = `project:${uid}`;
    const redisData = JSON.parse(await client.get(projectKey));
    if (redisData) {
      console.log("Data retrieved from Redis", redisData);
      res.send(redisData);
    } else {
      const project = await projects.findOne({ uid: uid });
      if (!project) {
        console.log("Project not found");
        res.status(404).send({ msg: "Project not found" });
      } else {
        const projectData = project.data;
        console.log("Project data fetched");
        await client.set(projectKey, JSON.stringify(projectData));
        client.expire(projectKey, 30);
        res.send(projectData);
      }
    }

  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};
export const addProject = async (req, res) => {
  try {
    const uid = req.params.uid;
    const data = req.body;
    const project = await projects.findOne({ uid: uid });
    if (!project) {
      const newProject = new projects({
        uid: uid,
        data: data
      });
      await newProject.save();
      console.log("Project created");
      res.send({ msg: "Project saved successfully" });
    } else {
      project.data = data;
      await project.save();
      console.log("Project updated");
      res.send({ msg: "Project updated successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};