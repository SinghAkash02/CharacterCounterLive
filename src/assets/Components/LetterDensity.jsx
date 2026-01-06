// import { useState } from "react";

// export default function LetterDensity({ text }) {
//     const [showAll, setShowAll] = useState(false);

//     const letters = text
//         .toUpperCase()
//         .replace(/[^A-Z]/g, "")
//         .split("");

//     if (!letters.length) {
//         return (
//             <div className="density">
//                 <h3>Letter Density</h3>
//                 <p>No characters found. Start typing to see letter density.</p>
//             </div>
//         );
//     }

//     const total = letters.length;

//     const frequency = {};
//     letters.forEach((l) => {
//         frequency[l] = (frequency[l] || 0) + 1;
//     });

//     const sorted = Object.entries(frequency).sort((a, b) => b[1] - a[1]);


//     const visibleData = showAll ? sorted : sorted.slice(0, 5);

//     return (
//         <div className="density">
//             <h3>Letter Density</h3>

//             {visibleData.map(([char, count]) => {
//                 const percent = ((count / total) * 100).toFixed(2);
//                 return (
//                     <div className="density-row" key={char}>
//                         <span>{char}</span>

//                         <div className="bar">
//                             <div
//                                 className="fill"
//                                 style={{ width: `${percent}%` }}
//                             />
//                         </div>

//                         <span>
//                             {count} ({percent}%)
//                         </span>
//                     </div>
//                 );
//             })}


//             {sorted.length > 5 && (
//                 <span
//                     className="see-more"
//                     onClick={() => setShowAll(!showAll)}
//                 >
//                     {showAll ? "See less ↑" : "See more ↓"}
//                 </span>
//             )}
//         </div>
//     );
// }







import { useState } from "react";

function DensityBlock({ title, data }) {
    const [showAll, setShowAll] = useState(false);

    if (!data.length) return null;

    const total = data.reduce((sum, [, count]) => sum + count, 0);
    const visibleData = showAll ? data : data.slice(0, 5);

    return (
        <div className="density-section">
            <h3>{title}</h3>

            {visibleData.map(([char, count]) => {
                const percent = ((count / total) * 100).toFixed(2);

                return (
                    <div className="density-row hover-row" key={char}>
                        <span>{char}</span>

                        <div className="bar">
                            <div
                                className="fill"
                                style={{ width: `${percent}%` }}
                            />
                        </div>

                        <span>
                            {count} ({percent}%)
                        </span>
                    </div>
                );
            })}

            {data.length > 5 && (
                <span
                    className="see-more"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "See less ↑" : "See more ↓"}
                </span>
            )}
        </div>
    );
}

export default function LetterDensity({ text }) {
    const letters = {};
    const numbers = {};
    const specials = {};

    for (let char of text) {
        if (/[A-Za-z]/.test(char)) {
            const c = char.toUpperCase();
            letters[c] = (letters[c] || 0) + 1;
        }
        else if (/[0-9]/.test(char)) {
            numbers[char] = (numbers[char] || 0) + 1;
        }
        else if (char.trim() !== "") {
            specials[char] = (specials[char] || 0) + 1;
        }
    }

    const sortDesc = (obj) =>
        Object.entries(obj).sort((a, b) => b[1] - a[1]);

    return (
        <div className="density">
            <DensityBlock
                title="Letter Density"
                data={sortDesc(letters)}
            />

            <DensityBlock
                title="Number Density"
                data={sortDesc(numbers)}
            />

            <DensityBlock
                title="Special Character Density"
                data={sortDesc(specials)}
            />
        </div>
    );
}

