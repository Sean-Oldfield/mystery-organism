// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, bases) => {
    return {
        _specimenNum: number,
        _dna: bases,
        get specimenNum() {
            return this._specimenNum;
        },
        get dna() {
            return this._dna;
        },
        mutate() {
            let baseToMutate = Math.floor((Math.random() * this.dna.length));
            let newBase = returnRandBase();
            while (this.dna[baseToMutate] === newBase) {
                newBase = returnRandBase();
            }
            this._dna[baseToMutate] = newBase;
            return this.dna;
        },
        compareDNA(comparisonSpecimen) {
            let thisSpecDNA = this.dna;
            let comparisonDNA = comparisonSpecimen.dna;
            let sharedDNA = [];
            for (let i = 0; i < thisSpecDNA.length; i++) {
                if (thisSpecDNA[i] === comparisonDNA[i]) {
                    sharedDNA.push(thisSpecDNA[i]);
                }
            }
            let percentageInCommon = (sharedDNA.length / thisSpecDNA.length) * 100;
            console.log(`${this.specimenNum} and ${comparisonSpecimen.specimenNum} have ${percentageInCommon}% DNA in common.`);
        },
        willLikelySurvive() {
            let baseCount = 0;
            this.dna.forEach(base => {
                if (base === 'C' || base === 'G') {
                    baseCount++;
                }
            });
            let percentageCorG = (baseCount / this.dna.length) * 100;
            if (percentageCorG >= 60) {
                return true;
            } else {
                return false;
            }
        }
    };
}

const pAuquourLikelyToSurvive = [];
let i = 0;
while (pAuquourLikelyToSurvive.length < 30) {
    let pAuquourSpecimen = pAequorFactory(`Specimen #${i}`, mockUpStrand());
    i++;
    if (pAuquourSpecimen.willLikelySurvive()) {
        pAuquourLikelyToSurvive.push(pAuquourSpecimen);
    }
}

console.log(pAuquourLikelyToSurvive);
// console.log(pAuquourLikelyToSurvive.length);

// const bigPAuquour = pAequorFactory('Specimen #1', mockUpStrand());
// console.log(bigPAuquour);
// console.log(bigPAuquour.willLikelySurvive());
// // const smallPAuquour = pAequorFactory('Specimen #2', mockUpStrand());
// // console.log(smallPAuquour);
// // bigPAuquour.compareDNA(smallPAuquour);










