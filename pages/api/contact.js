// /api/contact

const validate = ({email, name, message}) => {
    if (!email || email.length < 2 ||
        !name || name.length < 2 ||
        !message || message.length < 2 ||
        !email.includes('@'))
    {
        return false;    
    }
    return true
}

function handler(req, res) {
    
    switch (req.method) {
        case 'POST':
            let obj = req.body
            obj.email = '1'
            if (!validate(obj)) {
                res.status(422).json({appStatus: 'failure', errorDetail: 'validation error' })
            } else {
                res.status(201).json({appStatus: 'success' })
            }
          
            break;
        default: 
            console.log(method.get + ' is not implemented.')
    }
    
}

export default handler
