import express from 'express'
import { v4, v6 } from 'public-ip';

const router = express.Router();

router.get('/json', async (req, res) => {
    try {
        const ipv4 = await v4();

        return res.status(200).json({ ip: ipv4, test: req.ip });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.get('/json/ipv6', async (req, res) => {
    try {
        const ipv6 = await v6();
    
        return res.status(200).json({ ip: ipv6 });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.get('/', async (req, res) => {
    try {
        const ipv4 = await v4();
    
        return res.status(200).json(ipv4);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.get('/ipv6', async (req, res) => {
    try {
        const ipv6 = await v6();

        return res.status(200).json(ipv6);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

export default router;