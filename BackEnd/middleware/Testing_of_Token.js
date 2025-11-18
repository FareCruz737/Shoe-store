function verifyToken(req, res) {
  const token = req.headers['authorization'];
 

     if (!token) { return res.status(401).json({ message: 'dont have token.' }); }

   if (!token) { return res.status(401).json({ message: 'dont have token.' }); }

     try {
        const decoded = jwt.verify(token, SECRET);
        const data = decoded; 
        res.send(data);      

    } catch (err) {
        return res.status(401).json({ message: 'Invalid token.' });
    }   
};
module.exports = verifyToken;