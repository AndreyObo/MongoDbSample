import { host } from "./index";

export const GetAllQuery = async () => {
    const {data} = await host.get('/app/getall')
    return data
}

export const GetComments = async (id) => {
    const {data} = await host.get('/app/getcom', {params:{id}})
    return data
}

export const CreateQuery = async (_name, _mail, _ready, _comment=" ") => {
    const {data} = await host.post('/app/create', {name:_name, mail:_mail, comment:_comment, isValidate:_ready})
    return data
}

export const AddComment = async (id, body) => {
    const {data} = await host.post('/app/addcomment', {id, body})
    return data
}


export const DeleteOne = async (id)  =>{
    const res = await host.delete('/app/delete', {params:{id}})
}