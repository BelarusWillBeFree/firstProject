import fs from "fs";
import _ from 'lodash';
console.log('hello');
const data = fs.readFileSync('/home/anatoli/js/firstProject/README.md');
console.log(_.intersection([1,2],[2,3]));
console.log(_.capitalize('hello'));
