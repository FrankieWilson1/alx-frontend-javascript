// js/main.ts

interface MajorCredits {
    credits: number;
    readonly _brand: 'major';
}

interface MinorCredits {
    credits: number;
    readonly _brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'major' // Includes the brand name
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'minor' // Includes the brand name
    }
}