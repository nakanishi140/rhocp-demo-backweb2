/*	--------------------------------------------------------------------------/
 *	author		: 
 *	module		：
 *											COPYRIGHT 
 *	-------------------------------------------------------------------------*/


/*	--------------------------------------------------------------------------/
 *	index.js
 *	-------------------------------------------------------------------------*/	

const express = require('express');
const http = require("http");
const router = express.Router();

// デフォルトルーティング
router.get('/ddddd', function (request, response) {
	response.send('{"param1":"hello","param2":"back2"}');
});


// デフォルトルーティング
router.get('/back2', function (request, response) {
	let totalrr = {};
	totalrr.restdb = {};
	totalrr.restdb.body = '';
	totalrr.restdb.status = '';
	
	let promise = Promise.resolve();
	promise
		.then(call_restdb)
		.then((result) => {
			return new Promise(function(resolve, reject){
				totalrr.restdb = result;
            	resolve(1);
			});
		})
		.then(send_data)
		.then((result) => {
			return new Promise(function(resolve, reject){
				resolve(2);
			});
		});
	
	
	
	function call_restdb() {
		return new Promise((resolve,reject) => {
			var options = {
				protocol: "http:",
				host: "restdb",
				port: 8080,
				path: "/api/demo2",
				method: "GET"
			};
			const req = http.request(options,(res)=>{
				let rr = {};
				var body = '';
				rr.status = res.statusCode;
				res.setEncoding("utf-8");
				res.on("data",(chunk) => {
					body += chunk;
				});
				res.on("end",(chunk)=>{
					rr.body = body;
					resolve(rr);
				});
			});
			req.end();
		});
	}
	
	
	function send_data() {
		return new Promise((resolve,reject) => {
			response.send(totalrr.restdb.body);
			resolve("render complete");
		});
	}
	
});


module.exports = router;


