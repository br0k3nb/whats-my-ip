import express from 'express';

const router = express.Router();

router.get('/json', async (req, res) => {
    try {
        return res.status(200).json({ ip: req.ip });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.get('/', async (req, res) => {
    try {
        return res.status(200).json(req.ip);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

export default router;