import catcAsync from 'express-async-handler'
import FormData from '../model/formModel.js'

const addFormData = catcAsync(async(req, res) => {
    try {
        if (!req.body) {
            throw new Error(`Is missing parameter :  Table data`);
        }
        
        const createForm = FormData({
            course: req.body.course,
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
            education:req.body.education,
            college: req.body.college,
            message: req.body.message,

        });
        createForm.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
            
            res.status(500).send({
                message: err.message || 'someError'
            })
        })

        
    } catch (error) {
        this.logger.error({
            data: req.body,
            error: error,
            source: 'Error in function createCourses'
        });
        res.status(500);
        return res.send({ error: (error.message) ? error.message : "Internal server error" });
    
    }

})



const showFormById = catcAsync(async(req, res)=> {
    const form = await FormData.findById(req.params.id);
    if(form){
        res.json(form);

    }else{
        // res.status(404).json({message: "form not found"})
        // after usni error handler from middleware we can write only this
        res.status(404);
        throw new Error ('Form details not found')
    }

})

const showAllForm = catcAsync(async(req, res) => {
    const form = await FormData.find({})
    res.json(form)
})


const DeleteForm = catcAsync(async(req, res)=> {
    const form = await FormData.findById(req.params.id);
    if(form){
        const remove = await form.remove();
        res.json({
            message: 'File deleted',
        })
    }else{
        res.status(404);
        throw new Error ("file not found")
    }
})

export {addFormData, showFormById, showAllForm, DeleteForm};