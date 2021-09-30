import { Router } from 'express';

export const friends = Router();

const STATIC_FRIEND_LIST = [
    {
        name: "Nathan R",
        id: ~~(Math.random() * 100000)
    }
]

friends.get('/', (_req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(STATIC_FRIEND_LIST);
});

friends.get('/new', (req, res) => {
    // console.log(req.query)
    // res.send(req.query)

    let s:any = ""

    if(req.query && req.query.name) {
        s = req.query.name;
    } 

    STATIC_FRIEND_LIST.push({
        name: s,
        id: ~~(Math.random() * 100000)
    })
})