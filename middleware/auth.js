import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log('TOKEN ',token);
        const isCustomAuth = token.length < 500;
        
        let decodeData;
        
        if(token && isCustomAuth) {
            decodeData = jwt.verify(token,'test');
            req.userId = decodeData?.indexOf;
            console.log('CUSTOM ',decodeData, req.userId);
        }
        else {
            decodeData = jwt.decode(token);
            req.userId = decodeData?.sub;
            console.log('GOOGLE ',decodeData, req.userId);
        }

        next();
    }
    catch (error) {
        console.log(error);
    }
}

export default auth;