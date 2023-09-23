import express from 'express'

const router = express.Router();

router.get('/json', (req, res) => {
    return res.status(200).json({ ip: res.socket?.remoteAddress });
});

router.get('/', (req, res) => {
    return res.status(200).send(res.socket?.remoteAddress);
});

export default router;