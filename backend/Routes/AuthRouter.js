const router = require('express').Router();


router.post('/login',(reqs,req)=>{
    res.send('login success');
})

router.post('/signup',(reqs,req)=>{
    res.send('signup success');
})


module.exports = router;