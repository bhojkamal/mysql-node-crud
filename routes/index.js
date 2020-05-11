module.exports = {
    getHomePage: (req, res) => {
        // query database to get all the players
        let query = "SELECT * FROM `players` ORDER BY id ASC"; 
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
                console.log(err);
            }
            res.render('index.ejs', {
                title: "Welcome to Acme | View Players"
                ,players: result
            });
        });
    },
};
