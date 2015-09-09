angular.module('englishword', [])
	.controller('MainCtrl', ['$scope',function($scope){
		var self = this;
		//Word List
		self.word = [
			{eng: 'Apple', cht: '蘋果'},
			{eng: 'Banana', cht: '香蕉'},
			{eng: 'Pear', cht: '水梨'},
			{eng: 'Monitor', cht: '螢幕'},
			{eng: 'Keyboard', cht: '鍵盤'},
			{eng: 'Door', cht: '門'},
			{eng: 'Ball pen', cht: '原子筆'},
			{eng: 'Black tea', cht: '紅茶'},
			{eng: 'Blanket', cht:'毛毯'},
			{eng: 'Bread basket', cht:'麵包籃'}
		];
		//Check method is checking the answer and display the result
		self.check = function() {
			if(self.userans === self.answer)
			{
				self.result = 'Correct!';
			}
			else
			{
				self.result = 'Incorrect!';
			}
		};
		//Next method is reproducing the question
		self.next = function() {
			//Initialed the form
			self.result = '';
        	self.userans = '';
			//Random to produces a question
			var maxNum = 9;
			var minNum = 0;
			var random = Math.floor(Math.random()* (maxNum - minNum +1)) +minNum;
			self.question = self.word[random].eng;  //Question
			self.answer = self.word[random].cht;	//Answer
			//Random to put the answer into the choices
			var ans_maxNum = 3;
			var ans_minNum = 0;
			var ans_random = Math.floor(Math.random()* (ans_maxNum - ans_minNum + 1)) + ans_minNum;
			self.chooses = [];
			/*Store the random choice number, 
			  and determine that whether the number is exist in the temp array */
			var temp=[];
			temp.push(random);
			for(var i=0; i<4;i++)
			{
				if(i === ans_random)
				{
					self.chooses.push(self.answer);
				}
				else
				{
					//Using the do while loop to reproduce the number where is exist in temp array
					do{
						var random2 = Math.floor(Math.random()* (maxNum - minNum +1)) +minNum;
					}while(temp.indexOf(random2) >= 0);
					temp.push(random2);
					self.chooses.push(self.word[random2].cht);
				}
			}
		};
		self.next();
	}]);