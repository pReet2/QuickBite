import express from 'express'
import cors from 'cors'

const app = express()
const port = 4000


app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
