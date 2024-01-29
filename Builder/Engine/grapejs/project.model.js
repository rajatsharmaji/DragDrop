import mongoose from "mongoose";

const projects = mongoose.Schema(
    {
        "uid": {
            type: String,
            required: true,
        },
        data: {}
    }
)

export default mongoose.model("projects",projects)