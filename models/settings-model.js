module.exports = (dbPoolInstance) => {

    let show = (requestdata, callback) => {
        console.log("entering model show");
        console.log("requestdata", requestdata);
        let user_id = parseInt(requestdata.id);
        let query = `SELECT * FROM settings WHERE user_id = ${user_id}`;
        dbPoolInstance.query(query, (err, result) => {
            console.log(query)
            if(err){
                callback(err, null);
            } else if (result.rows.length > 0){
                callback(null, result.rows);
            } else {
                callback(null, null);
            };
        });
    };

    return {
        show
    };
};