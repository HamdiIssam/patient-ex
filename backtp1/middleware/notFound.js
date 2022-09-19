const notFound=(req,res)=>{
    res.status(404).send('route inexistant')
}
module.exports = notFound;