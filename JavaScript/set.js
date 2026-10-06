let setting =new Set();
setting.add(1);
setting.add(2);
setting.add("Applie");
setting.add("Applie");//duplicate
console.log(setting);
console.log(setting.has(1));
console.log(setting.size);
console.log(setting.delete(2));
console.log(setting.clear());