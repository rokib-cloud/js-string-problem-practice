function smallestInArray(numbers) {
    let smallest = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const heights = [167, 190, 120, 165, 137, 255, 12];
const tallest = smallestInArray(heights);
console.log(tallest);