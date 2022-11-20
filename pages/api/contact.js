import { connectDb, insertRecord } from '../../util/db-util'

// /api/contact

const validate = ({email, name, message}) => {
    if (!email || email?.length < 2 ||
        !name || name?.length < 2 ||
        !message || message?.length < 2 ||
        !email?.includes('@'))
    {
        return false;    
    }
    return true
}

const handler = async (req, res)  => {
    
    switch (req.method) {
        case 'POST':
            let obj = req.body
          
            if (!validate(obj)) {
                res.status(422).json({ appStatus: 'error', detail: 'validation error' })
                return
            }

            let client
            try {
                client = await connectDb()
            } catch(error) {
                res.status(500).json({ appStatus: 'error', detail: error.toString() })
                return
            }
               
            let ret
            try {
                ret = await insertRecord(client, 'blog', 'contact', obj) 
                res.status(201).json({appStatus: 'success', detail: 'Key=' +  ret.insertedId })
            } catch (error) {
                res.status(500).json({ appStatus: 'failed to insert', detail: error.toString() })
            }
          
            break;
        default: 
            console.log(method.get + ' is not implemented.')
    }
    
}

export default handler
