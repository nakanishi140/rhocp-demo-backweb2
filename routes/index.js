/*	--------------------------------------------------------------------------/
 *	author		: 
 *	module		：
 *											COPYRIGHT 
 *	-------------------------------------------------------------------------*/


/*	--------------------------------------------------------------------------/
 *	index.js
 *	-------------------------------------------------------------------------*/	

const express = require('express');
const router = express.Router();

// デフォルトルーティング
router.get('/back2', function (request, response) {
	response.send('{"param1":"hello","param2":"back2"}');
});


module.exports = router;


