const router = require('express').Router();
const { ScheduledActivity } = require('../../models');

router.post('/'), async (req, res) => {
    try {
        const activityData = await ScheduledActivity.create(req.body);
        res.status(200).json(activityData);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports=router;