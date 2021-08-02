
import Mongoose  from "mongoose";


const formSchema = Mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    education:{
        type: String,
        required: true
    },
    college:{
        type: String,
        required: true,
    },
    message:{
        type: String,
    },
    course:[Object]
},{ timestamps: true}

)
const FormData = Mongoose.model('FormData', formSchema)
export default FormData