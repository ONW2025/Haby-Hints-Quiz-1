const quizContainer = document.getElementById('quiz-container');
const questionCounterEl = document.getElementById('question-counter');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-button');
const restartButton = document.getElementById('restart-button');
const feedbackElement = document.getElementById('feedback');

const quizData = [
  {
    question: "All the following processes will increase the lower tropospheric relative humidity except:\na. Lifting of air\nb. Evaporation of precipitation\nc. Orographic descent\nd. Advection of air with a much lower dewpoint depression",
    options: [
      "Lifting of air",
      "Evaporation of precipitation",
      "Orographic descent",
      "Advection of air with a much lower dewpoint depression"
    ],
    correctAnswer: "Orographic descent" // Key: C
  },
  {
    question: "The lifting of air that occurs with an upper level low commonly occurs through:\na. Converging of air masses\nb. Increasing values of moisture\nc. Cold air advection\nd. Upper level divergence",
    options: [
      "Converging of air masses",
      "Increasing values of moisture",
      "Cold air advection",
      "Upper level divergence"
    ],
    correctAnswer: "Upper level divergence" // Key: D
  },
  {
    question: "This air mass has the most dense air and thus tends to flow underneath other air masses when it interacts with them.\na. Continental tropical\nb. Continental polar\nc. Maritime polar\nd. Maritime tropical",
    options: [
      "Continental tropical",
      "Continental polar",
      "Maritime polar",
      "Maritime tropical"
    ],
    correctAnswer: "Continental polar" // Key: B
  },
  {
    question: "All of the following are favorable for morning dew except:\na. Soil with a high moisture content\nb. Cloudy skies\nc. Light winds\nd. Low afternoon dewpoint depression preceding the night",
    options: [
      "Soil with a high moisture content",
      "Cloudy skies",
      "Light winds",
      "Low afternoon dewpoint depression preceding the night"
    ],
    correctAnswer: "Cloudy skies" // Key: B
  },
  {
    question: "This is the term for liquid condensation on the ground that then freezes during the course of the night:\na. Dew\nb. Frost\nc. Frozen dew\nd. Freezing rain",
    options: [
      "Dew",
      "Frost",
      "Frozen dew",
      "Freezing rain"
    ],
    correctAnswer: "Frozen dew" // Key: C
  },
  {
    question: "Outflow boundaries are miniature cold fronts that form due to the presence of:\na. Positive vorticity advection\nb. Warm air advection\nc. Coastlines\nd. Multi-cell thunderstorms",
    options: [
      "Positive vorticity advection",
      "Warm air advection",
      "Coastlines",
      "Multi-cell thunderstorms"
    ],
    correctAnswer: "Multi-cell thunderstorms" // Key: D
  },
  {
    question: "Why do bridges and over passes usually ice up before other roads?\na. Bridges and overpasses are more exposed to the air and thus cool more quickly\nb. Surface frictional warming between tires and the road is less on bridges and overpasses\nc. Bridges and overpasses tend to retain more heat\nd. Bridges and overpasses are made of substances that tend to freeze more easily",
    options: [
      "Bridges and overpasses are more exposed to the air and thus cool more quickly",
      "Surface frictional warming between tires and the road is less on bridges and overpasses",
      "Bridges and overpasses tend to retain more heat",
      "Bridges and overpasses are made of substances that tend to freeze more easily"
    ],
    correctAnswer: "Bridges and overpasses are more exposed to the air and thus cool more quickly" // Key: A
  },
  {
    question: "Radiation fog tends to form first in lower lying areas because:\na. Temperatures are warmer and moisture concentration is higher\nb. Temperatures are cooler and moisture concentration is higher\nc. Temperatures are warmer and moisture concentration is lower\nd. Temperatures are cooler and moisture concentration is lower",
    options: [
      "Temperatures are warmer and moisture concentration is higher",
      "Temperatures are cooler and moisture concentration is higher",
      "Temperatures are warmer and moisture concentration is lower",
      "Temperatures are cooler and moisture concentration is lower"
    ],
    correctAnswer: "Temperatures are cooler and moisture concentration is higher" // Key: B
  },
  {
    question: "Dew is most likely to first form on substances that are _____(1)______ than surrounding objects and have a ______(2)________ dewpoint immediately around the object.\na. (1) Warmer, (2) higher\nb. (1) Warmer, (2) lower\nc. (1) Cooler, (2) lower\nd. (1) Cooler, (2) higher",
    options: [
      "(1) Warmer, (2) higher",
      "(1) Warmer, (2) lower",
      "(1) Cooler, (2) lower",
      "(1) Cooler, (2) higher"
    ],
    correctAnswer: "(1) Cooler, (2) higher" // Key: D
  },
  {
    question: "This force causes the wind to slow down, causes air to converge into surface low pressure, and causes wind to be turbulent (gusty) near the surface.\na. Coriolis\nb. Pressure Gradient Force\nc. Friction\nd. Gravity",
    options: [
      "Coriolis",
      "Pressure Gradient Force",
      "Friction",
      "Gravity"
    ],
    correctAnswer: "Friction" // Key: C
  },
  {
    question: "A sea breeze front will bring in ____(1)_____ temperatures inland. The sea breeze occurs during the ____(2)_____.\na. (1) Cooler, (2) night\nb. (1) Cooler, (2) day\nc. (1) Warmer, (2) night\nd. (1) Warmer, (2) day",
    options: [
      "(1) Cooler, (2) night",
      "(1) Cooler, (2) day",
      "(1) Warmer, (2) night",
      "(1) Warmer, (2) day"
    ],
    correctAnswer: "(1) Cooler, (2) day" // Key: B
  },
  {
    question: "As a cold front presses equatorward the air behind the cold front will generally warm over time. All the following will help support this except:\na. Higher sun angles\nb. Warm soils\nc. Depth of cold air becoming more shallow\nd. Evaporation into cold and dry air",
    options: [
      "Higher sun angles",
      "Warm soils",
      "Depth of cold air becoming more shallow",
      "Evaporation into cold and dry air"
    ],
    correctAnswer: "Evaporation into cold and dry air" // Key: D
  },
  {
    question: "All of the following will strengthen a mid-latitude cyclone except:\na. Dry air advection into the cyclone\nb. Moist air advection into the cyclone\nc. Strengthening upper level divergence\nd. Strengthening low level convergence",
    options: [
      "Dry air advection into the cyclone",
      "Moist air advection into the cyclone",
      "Strengthening upper level divergence",
      "Strengthening low level convergence"
    ],
    correctAnswer: "Dry air advection into the cyclone" // Key: A
  },
  {
    question: "Which of the following is false concerning a shortwave?\na. They have cyclonic curvature\nb. They are smaller than longwaves\nc. They often have rising air associated with them\nd. They occur at the surface",
    options: [
      "They have cyclonic curvature",
      "They are smaller than longwaves",
      "They often have rising air associated with them",
      "They occur at the surface"
    ],
    correctAnswer: "They occur at the surface" // Key: D
  },
  {
    question: "For synoptic scale precipitation to occur through dynamic (forced) ascent there needs to be saturated air and ____________.\na. A lifting mechanism\nb. An unstable troposphere\nc. Synoptic scale subsidence\nd. Strong speed and directional wind shear",
    options: [
      "A lifting mechanism",
      "An unstable troposphere",
      "Synoptic scale subsidence",
      "Strong speed and directional wind shear"
    ],
    correctAnswer: "A lifting mechanism" // Key: A
  },
  {
    question: "Four locations have a temperature of 70°F at 4 pm. Assuming the weather is the same for each location overnight (clear skies, light winds) except dewpoint, which location should have the cooler overnight low?\na. Location 1 (4 pm dewpoint of 65°F)\nb. Location 2 (4 pm dewpoint of 60°F)\nc. Location 3 (4 pm dewpoint of 55°F)\nd. Location 4 (4 pm dewpoint of 50°F)",
    options: [
      "Location 1 (4 pm dewpoint of 65°F)",
      "Location 2 (4 pm dewpoint of 60°F)",
      "Location 3 (4 pm dewpoint of 55°F)",
      "Location 4 (4 pm dewpoint of 50°F)"
    ],
    correctAnswer: "Location 4 (4 pm dewpoint of 50°F)" // Key: D
  },
  {
    question: "The type of thermal advection that takes place depends primarily upon:\na. Solar radiation\nb. Wind speed\nc. Wind direction\nd. Latent heat processes",
    options: [
      "Solar radiation",
      "Wind speed",
      "Wind direction",
      "Latent heat processes"
    ],
    correctAnswer: "Wind direction" // Key: C
  },
  {
    question: "Rapid height falls on upper level charts indicate that _____(1)______ weather is likely approaching. Rapid surface pressure rises at the surface indicate that _____(2)______ weather is likely approaching.\na. (1) tranquil, (2) tranquil\nb. (1) inclement, (2) tranquil\nc. (1) tranquil, (2) inclement\nd. (1) inclement, (2) inclement",
    options: [
      "(1) tranquil, (2) tranquil",
      "(1) inclement, (2) tranquil",
      "(1) tranquil, (2) inclement",
      "(1) inclement, (2) inclement"
    ],
    correctAnswer: "(1) inclement, (2) tranquil" // Key: B
  },
  {
    question: "Evaporational cooling _____(1)_____ latent heat and therefore _____(2)_____ the air.\na. (1) releases, (2) warms\nb. (1) releases, (2) cools\nc. (1) absorbs, (2) warms\nd. (1) absorbs, (2) cools",
    options: [
      "(1) releases, (2) warms",
      "(1) releases, (2) cools",
      "(1) absorbs, (2) warms",
      "(1) absorbs, (2) cools"
    ],
    correctAnswer: "(1) absorbs, (2) cools" // Key: D
  },
  {
    question: "For locations at a constant elevation, the most important global climatic control to expected temperatures is:\na. Ocean currents\nb. Proximity to an ocean body\nc. Latitude\nd. Prevailing wind",
    options: [
      "Ocean currents",
      "Proximity to an ocean body",
      "Latitude",
      "Prevailing wind"
    ],
    correctAnswer: "Latitude" // Key: C
  },
  {
    question: "(Statement 1) Drier soils tend to promote cooler high temperatures than wet soils. (Statement 2) Drier soils tend to promote cooler low temperatures than wet soils.\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 is false\nd. Statement 1 is false and Statement 2 is true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 is false",
      "Statement 1 is false and Statement 2 is true"
    ],
    correctAnswer: "Statement 1 is false and Statement 2 is true" // Key: D
  },
  {
    question: "(Statement 1) When all other ingredients for radiation fog are available, radiation fog is more likely to form if the wind speed is calm as opposed to 5 mph. (Statement 2) If an afternoon rain falls preceding a clear night then the risk of fog increases.\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 is false\nd. Statement 1 is false and Statement 2 is true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 is false",
      "Statement 1 is false and Statement 2 is true"
    ],
    correctAnswer: "Statement 1 is false and Statement 2 is true" // Key: D
  },
  {
    question: "The safest location to be during a tornado is a(n):\na. Mobile home\nb. Car\nc. Attic\nd. Bank vault",
    options: [
      "Mobile home",
      "Car",
      "Attic",
      "Bank vault"
    ],
    correctAnswer: "Bank vault" // Key: D
  },
  {
    question: "Which of the following is analyzed on a lower tropospheric analysis:\na. Differential vorticity advection\nb. Temperature advection\nc. Jet stream\nd. Longwave troughs and ridges",
    options: [
      "Differential vorticity advection",
      "Temperature advection",
      "Jet stream",
      "Longwave troughs and ridges"
    ],
    correctAnswer: "Temperature advection" // Key: B
  },
  {
    question: "Positive vorticity is a ______________ spin to the air in the Northern Hemisphere.\na. Cyclonic (counterclockwise)\nb. Anticyclonic (clockwise)\nc. Convective\nd. Retrograde",
    options: [
      "Cyclonic (counterclockwise)",
      "Anticyclonic (clockwise)",
      "Convective",
      "Retrograde"
    ],
    correctAnswer: "Cyclonic (counterclockwise)" // Key: A
  },
  {
    question: "(Statement 1) A jet streak in the entrance sector of a trough will tend to weaken the trough over time. (Statement 2) If the upper level winds are weak, storm systems and thunderstorms will tend to move slower than when the upper level winds were strong.\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 is false\nd. Statement 1 is false and Statement 2 is true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 is false",
      "Statement 1 is false and Statement 2 is true"
    ],
    correctAnswer: "Statement 1 is false and Statement 2 is true" // Key: D
  },
  {
    question: "A global wind moving toward the North in the Northern Hemisphere will be deflected to the _____(1)______ of the path of motion by the Coriolis force. A global wind moving toward the North in the Southern Hemisphere will be deflected to the _____(2)______ of the path of motion by the Coriolis force.\na. (1) left, (2) left\nb. (1) right, (2) right\nc. (1) left, (2) right\nd. (1) right, (2) left",
    options: [
      "(1) left, (2) left",
      "(1) right, (2) right",
      "(1) left, (2) right",
      "(1) right, (2) left"
    ],
    correctAnswer: "(1) right, (2) left" // Key: D
  },
  {
    question: "All of the following further increase instability except:\na. Lower tropospheric warm air advection\nb. Lower troposphere moisture advection\nc. Middle and upper tropospheric warm air advection\nd. Middle and upper tropospheric cold air advection",
    options: [
      "Lower tropospheric warm air advection",
      "Lower troposphere moisture advection",
      "Middle and upper tropospheric warm air advection",
      "Middle and upper tropospheric cold air advection"
    ],
    correctAnswer: "Middle and upper tropospheric warm air advection" // Key: C
  },
  {
    question: "The autumnal equinox occurs on:\na. September 23\nb. December 23\nc. March 23\nd. June 23",
    options: [
      "September 23",
      "December 23",
      "March 23",
      "June 23"
    ],
    correctAnswer: "September 23" // Key: A
  },
  {
    question: "The average environmental lapse rate (the average rate the temperature decreases with height in the troposphere) is near ________°C/km.\na. 4.5\nb. 5.5\nc. 6.5\nd. 7.5",
    options: [
      "4.5",
      "5.5",
      "6.5",
      "7.5"
    ],
    correctAnswer: "6.5" // Key: C
  },
  {
    question: "When a superadiabatic lapse rate occurs, it most commonly occurs:\na. Near the surface\nb. At the top of the boundary layer\nc. Near the 500 mb pressure surface\nd. Within the tropopause",
    options: [
      "Near the surface",
      "At the top of the boundary layer",
      "Near the 500 mb pressure surface",
      "Within the tropopause"
    ],
    correctAnswer: "Near the surface" // Key: A
  },
  {
    question: "The weather a certain location will experience is likely to be influenced by the _____(1)______ weather conditions. As a boat moves in a river current it moves toward _____(2)______.\na. (1) upstream, (2) downstream\nb. (1) downstream, (2) upstream\nc. (1) upstream, (2) upstream\nd. (1) downstream, (2) downstream",
    options: [
      "(1) upstream, (2) downstream",
      "(1) downstream, (2) upstream",
      "(1) upstream, (2) upstream",
      "(1) downstream, (2) downstream"
    ],
    correctAnswer: "(1) upstream, (2) downstream" // Key: A
  },
  {
    question: "Which of the following is an example of an adiabatic process:\na. A parcel of air warming as it sinks\nb. Sun shine warming the earth's surface\nc. Evaporational cooling within a parcel of air\nd. The soil evaporating moisture into the boundary layer",
    options: [
      "A parcel of air warming as it sinks",
      "Sun shine warming the earth's surface",
      "Evaporational cooling within a parcel of air",
      "The soil evaporating moisture into the boundary layer"
    ],
    correctAnswer: "A parcel of air warming as it sinks" // Key: A
  },
  {
    question: "Which of the following has the lowest albedo?\na. Snow\nb. Black top\nc. Sand\nd. Forest",
    options: [
      "Snow",
      "Black top",
      "Sand",
      "Forest"
    ],
    correctAnswer: "Black top" // Key: B
  },
  {
    question: "If the dewpoint depression is large during the afternoon, there will generally be a large temperature range between the high and low temperature, especially on clear days and nights.\na. True\nb. False",
    options: [
      "True",
      "False"
    ],
    correctAnswer: "True" // Key: A
  },
  {
    question: "If the weather is uncomfortably warm, which of the following will help it feel cooler:\na. Increasing the dewpoint\nb. Step into direct sunlight\nc. Stand in the shade in a breezy area and spray water mist on your face\nd. Exercise",
    options: [
      "Increasing the dewpoint",
      "Step into direct sunlight",
      "Stand in the shade in a breezy area and spray water mist on your face",
      "Exercise"
    ],
    correctAnswer: "Stand in the shade in a breezy area and spray water mist on your face" // Key: C
  },
  {
    question: "Which of the following is a direct sensor:\na. Radar\nb. Satellite\nc. Wind profiler\nd. Thermometer",
    options: [
      "Radar",
      "Satellite",
      "Wind profiler",
      "Thermometer"
    ],
    correctAnswer: "Thermometer" // Key: D
  },
  {
    question: "A contour line of equal rainfall is called an:\na. Isotach\nb. Isobar\nc. Isohyet\nd. Isohypse",
    options: [
      "Isotach",
      "Isobar",
      "Isohyet",
      "Isohypse"
    ],
    correctAnswer: "Isohyet" // Key: C
  },
  {
    question: "If heat is added to ice but the ice remains at a constant temperature, then:\na. The thermometer will detect a temperature change\nb. Energy is not being added to the ice\nc. Energy is being subtracted from the ice\nd. The energy added to the ice is being absorbed due to a latent heat process",
    options: [
      "The thermometer will detect a temperature change",
      "Energy is not being added to the ice",
      "Energy is being subtracted from the ice",
      "The energy added to the ice is being absorbed due to a latent heat process"
    ],
    correctAnswer: "The energy added to the ice is being absorbed due to a latent heat process" // Key: D
  },
  {
    question: "(Statement 1) As temperatures warm, increasing amounts of water vapor can be added to the air. (Statement 2) The maximum amount of water vapor that can be in the air is a function of temperature.\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 is false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both true" // Key: B
  },
  {
    question: "(Statement 1) Ocean temperatures tend to be highest climatologically in late summer. (Statement 2) The sun is at the highest noon solar elevation (maximum insolation) in early summer.\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both true" // Key: B
  },
  {
    question: "(Statement 1) Classic supercells tend to produce stronger convective wind gusts and larger hail than HP supercells. (Statement 2) LP supercells tend to produce stronger tornadoes than Classic or HP supercells.\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 is true and Statement 2 are false" // Key: C
  },
  {
    question: "(Statement 1) Low level uplift is more intense when low level convergence associated with a front is weak. (Statement 2) Warm fronts generally have more severe weather associated with them as compared to cold fronts and drylines.\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 and Statement 2 are both false" // Key: A
  },
  {
    question: "A moisture tongue will likely have all of the following associated with it except:\na. Warm air advection\nb. Higher dewpoints\nc. Strong wind\nd. Stability",
    options: [
      "Warm air advection",
      "Higher dewpoints",
      "Strong wind",
      "Stability"
    ],
    correctAnswer: "Stability" // Key: D
  },
  {
    question: "This is a term to describe a temperature lapse rate that is between the moist and dry adiabatic lapse rate.\na. Convective instability\nb. Potential instability\nc. Conditional instability\nd. Latent instability",
    options: [
      "Convective instability",
      "Potential instability",
      "Conditional instability",
      "Latent instability"
    ],
    correctAnswer: "Conditional instability" // Key: C
  },
  {
    question: "Severe thunderstorms in general tend to form in an environment initially with dynamic lifting, instability and:\na. Wind shear\nb. Capping\nc. Isentropic descent\nd. Saturation within entire troposphere",
    options: [
      "Wind shear",
      "Capping",
      "Isentropic descent",
      "Saturation within entire troposphere"
    ],
    correctAnswer: "Wind shear" // Key: A
  },
  {
    question: "Evaporational cooling is most common in the ________(1)__________. Drier air tends to be associated with the ________(2)___________.\na. (1) rear flank downdraft, (2) rear flank downdraft\nb. (1) forward flank downdraft, (2) forward flank downdraft\nc. (1) rear flank downdraft, (2) forward flank downdraft\nd. (1) forward flank downdraft, (2) rear flank downdraft",
    options: [
      "(1) rear flank downdraft, (2) rear flank downdraft",
      "(1) forward flank downdraft, (2) forward flank downdraft",
      "(1) rear flank downdraft, (2) forward flank downdraft",
      "(1) forward flank downdraft, (2) rear flank downdraft"
    ],
    correctAnswer: "(1) forward flank downdraft, (2) rear flank downdraft" // Key: D
  },
  {
    question: "(Statement 1) A south wind in the boundary layer and a west wind higher aloft is an example of a backing wind. (Statement 2) A veering wind is associated with warm air advection especially in the middle latitudes near mid-latitude cyclones.\na. Statement 1 and Statement 2 are both false\nb. Statement 1 and Statement 2 are both true\nc. Statement 1 is true and Statement 2 are false\nd. Statement 1 is false and Statement 2 are true",
    options: [
      "Statement 1 and Statement 2 are both false",
      "Statement 1 and Statement 2 are both true",
      "Statement 1 is true and Statement 2 are false",
      "Statement 1 is false and Statement 2 are true"
    ],
    correctAnswer: "Statement 1 is false and Statement 2 are true" // Key: D
  },
  {
    question: "This is a synoptic environment with fronts and mid-latitude cyclones:\na. Baroclinic\nb. Barotropic",
    options: [
      "Baroclinic",
      "Barotropic"
    ],
    correctAnswer: "Baroclinic" // Key: A
  },
  {
    question: "The winds within and around a tornado can vary by over 100 miles per hour over distances less than the size of a football field.\na. True\nb. False",
    options: [
      "True",
      "False"
    ],
    correctAnswer: "True" // Key: A
  }
];

// Global quiz state variables
let currentQuestion = 0;
let score = 0;           // Overall score (includes second chance successes)
let scoreFirstGuess = 0; // Score counting only first-try correct answers
let hasSecondChance = false;
let shuffledQuizData = [];
const totalQuestions = quizData.length;

// Fisher-Yates shuffle to randomize an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Update the question counter display (e.g., "Question 3 of 100")
function updateCounter() {
  questionCounterEl.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
}

// Load and display the current question from the (randomized) quiz array
function loadQuiz() {
  // When finished, show the final results
  if (currentQuestion >= totalQuestions) {
    const overallPercentage = (score / totalQuestions) * 100;
    const firstGuessPercentage = (scoreFirstGuess / totalQuestions) * 100;
    const passStatusOverall = overallPercentage >= 80 ? "passed" : "failed";
    const passStatusFirstGuess = firstGuessPercentage >= 80 ? "passed" : "failed";
    
    quizContainer.innerHTML = `
      <h2>Quiz Finished!</h2>
      <p>Your overall score (with second chances) is ${score} / ${totalQuestions} (${overallPercentage.toFixed(0)}%). You ${passStatusOverall}!</p>
      <p>Your first guess score is ${scoreFirstGuess} / ${totalQuestions} (${firstGuessPercentage.toFixed(0)}%). You ${passStatusFirstGuess} when only first attempts count.</p>
      <button id="restart-button-final">Restart Quiz</button>
    `;
    // Attach listener to the final restart button.
    document.getElementById('restart-button-final').addEventListener('click', restartQuiz);
    localStorage.removeItem('quizState');
    return;
  }

  updateCounter();

  const currentQuizItem = shuffledQuizData[currentQuestion];
  questionElement.innerText = currentQuizItem.question;

  // Clear previous options and feedback
  optionsElement.innerHTML = '';
  feedbackElement.innerText = '';

  // Create each option as a label with a radio input
  currentQuizItem.options.forEach(option => {
    const label = document.createElement('label');
    label.style.cursor = 'pointer';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = option;
    input.style.marginRight = '10px';

    label.prepend(input);
    label.appendChild(document.createTextNode(option));
    optionsElement.appendChild(label);
  });

  saveProgress();
}

// Check the user's answer when the submit button is clicked
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    return; // No option selected
  }
  
  const userAnswer = selectedOption.value;
  const correctAnswer = shuffledQuizData[currentQuestion].correctAnswer;

  if (userAnswer === correctAnswer) {
    feedbackElement.innerText = "Correct!";
    feedbackElement.classList.add("correct");
    feedbackElement.classList.remove("incorrect");
    
    score++; // Increase overall score
    // If the answer is correct on the first try, increase first-guess score
    if (!hasSecondChance) {
      scoreFirstGuess++;
    }
    hasSecondChance = false;
    
    // Pause to let user read the feedback before moving on
    setTimeout(() => {
      currentQuestion++;
      saveProgress();
      loadQuiz();
    }, 1500);
  } else {
    if (!hasSecondChance) {
      feedbackElement.innerText = "Incorrect. Try again.";
      feedbackElement.classList.add("incorrect");
      feedbackElement.classList.remove("correct");
      hasSecondChance = true;
    } else {
      feedbackElement.innerText = `Incorrect. The correct answer is ${correctAnswer}.`;
      feedbackElement.classList.add("incorrect");
      feedbackElement.classList.remove("correct");
      hasSecondChance = false;
      
      setTimeout(() => {
        currentQuestion++;
        saveProgress();
        loadQuiz();
      }, 1500);
    }
  }
}

// Save the current state (including randomized order and both scores) to localStorage
function saveProgress() {
  const quizState = {
    currentQuestion,
    score,
    scoreFirstGuess,
    hasSecondChance,
    shuffledQuizData
  };
  localStorage.setItem('quizState', JSON.stringify(quizState));
}

// Load saved quiz state from localStorage (if any)
function loadProgress() {
  const savedState = localStorage.getItem('quizState');
  if (savedState) {
    const quizState = JSON.parse(savedState);
    currentQuestion = quizState.currentQuestion;
    score = quizState.score;
    scoreFirstGuess = quizState.scoreFirstGuess;
    hasSecondChance = quizState.hasSecondChance;
    shuffledQuizData = quizState.shuffledQuizData;
  }
}

// Check for saved progress on page load and ask the user if they want to resume
function checkSavedProgress() {
  if (localStorage.getItem('quizState')) {
    const resume = confirm("You have an unfinished quiz. Would you like to resume?");
    if (resume) {
      loadProgress();
    } else {
      localStorage.removeItem('quizState');
      currentQuestion = 0;
      score = 0;
      scoreFirstGuess = 0;
      hasSecondChance = false;
      shuffledQuizData = shuffleArray(quizData.slice());
    }
  } else {
    shuffledQuizData = shuffleArray(quizData.slice());
  }
}

// Restart the quiz from the beginning
function restartQuiz() {
  localStorage.removeItem('quizState');
  currentQuestion = 0;
  score = 0;
  scoreFirstGuess = 0;
  hasSecondChance = false;
  shuffledQuizData = shuffleArray(quizData.slice());
  loadQuiz();
}

// Event listeners for the submit and restart buttons
submitButton.addEventListener('click', checkAnswer);

restartButton.addEventListener('click', () => {
  if (confirm("Are you sure you want to start over? Your current progress will be lost.")) {
    restartQuiz();
  }
});

// On page load, check for saved progress and load the quiz
checkSavedProgress();
loadQuiz();