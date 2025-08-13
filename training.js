function Triangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += "1";
        }
        console.log(row);
    }
}
Triangle(5);
process.stdout.write("Hello ");
process.stdout.write("World!");
process.stdout.write("\n"); 

