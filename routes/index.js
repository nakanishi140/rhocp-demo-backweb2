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
router.get('/back1', function (request, response) {
	response.send('{"param1":"hello2","param2":"back1"}');
});


module.exports = router;


