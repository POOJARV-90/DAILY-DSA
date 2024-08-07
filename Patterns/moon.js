function printSmileyCircle(radius) {
    const centerX = radius;
    const centerY = radius;

    let circle = '';

    for (let y = 0; y <= radius * 2; y++) {
        let row = '';
        for (let x = 0; x <= radius * 2; x++) {
            let distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            
            // Draw the circle outline
            if (Math.abs(distance - radius) < 0.5) {
                row += '*';
            }
            // Draw the eyes
            else if ((y === centerY - Math.floor(radius / 3) && x === centerX - Math.floor(radius / 3)) || 
                     (y === centerY - Math.floor(radius / 3) && x === centerX + Math.floor(radius / 3))) {
                row += 'o';
            }
            // Draw the smile
            else if (y === centerY + Math.floor(radius / 3) && x > centerX - Math.floor(radius / 4) && x < centerX + Math.floor(radius / 4)) {
                row += '-';
            }
            // Fill the rest with spaces
            else {
                row += ' ';
            }
        }
        circle += row + '\n';
    }

    console.log(circle);
}

printSmileyCircle(10);
