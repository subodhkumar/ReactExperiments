const questionsList = [
  'A live electric line has fallen on your car. Whats the safest thing you can do?', //Q1
  'Birds can safely sit on power wires that would kill people.', //Q2
  'It is safe to climb a tree located near a power line as long as the limbs arent touching the line.', //Q3
  'It is safe to touch a power line with a pole, antenna or other object.', //Q4
  'If you see a downed, or low hanging power line, you should:', //Q5
  'How much voltage is needed to hurt or kill people:', //Q6
  'Which of the following can conduct electricity?', //Q7
  'Electricity travels at the rate of:', //Q8
  'Most power lines are:', //Q9
  'Mysuru was illuminated during the year', //Q10
  'Flammable materials should:', //Q11
  'Where is the safest place to be during a lightning storm?', //Q12
  'Using a telephone during a lightening storm is dangerous.', //Q13
  'A car is a safe place to be in an electrical storm because it has rubber tires.', //Q14
  'All overhead power lines are completely insulated.', //Q15
  'Water is the best conductor of Electricity.', //Q16
  'Electricity is always seeking ground.', //Q17
  'Never place a halogen lamp around:', //Q18
  'If you see someone touching a downed power line, do not attempt to rescue him or her.', //Q19
  'If your kite gets stuck in an electrical line you should:', //Q20
  'You should unplug small appliances when not in use.', //Q21
  'One safe work practice while working around electrical equipment is:', //Q22
  'What uses less electricity:', //Q23
  'Your cricket ball got kicked over the fence of an electric substation and is lying just inside the fence. What do you do?', //Q24
  'What does the word photovoltaic mean?', //Q25
  'The solar or photo voltaic cell converts:', //Q26
  'Who discovered the photovoltaic effect?', //Q27
  'SRTPV stands for', //Q28
  'Where in Karnataka was the first hydroelectric power plant in Asia built?', //Q29
  'chamundi hills was electrified on', //Q30
  'Best transmission utility in india in the year 2016 was awarded by CBIP to', //Q31
  'Largest SCADA network in India is owned by', //Q32
  'Chief Minister ratna award for 2014-15 was awarded to', //Q33
  'First city to get street light in Asia', //Q34
  'The wattage of the bulb used for Mysuru palace lighting', //Q35
  'The wattage of the LED bulb supplied through CESC', //Q36
  'FTS stands for', //Q37
  'What is the frequency of alternating current produced in India?', //Q38
  'Mysore Palace is illuminated by _________ no of Lamps', //Q39
  'Electricity to Mettur Dam construction was supplied by _________ State in the year 1928', //Q40
  'First Hydel Power Power Plant in India was setup at', //Q41
  '1HP = _____ Watts', //Q42
  'Domestic Lighting Power Supply Specification', //Q43
  'Tariff applicable to lighting of residential houses', //Q44
  'The Conductor of Electricity is', //Q45
  'Out of the following which is an insulating material', //Q46
  'CESC Stands for', //Q47
  'Higher Star Rating given by Bureau of Energy Efficiency in Electrical Appliances indicates', //Q48
  'BESCOM Stands for', //Q49
  'CESC is responsible for the supply of Electricity to', //Q50
  'The toll free no of Chamundeshwari Electricity Supply Corporation 24/7 Helpline and Electricity Compliant is', //Q51
  'Chamundeshwari Electricity Supply Corporation was formed with Effect from', //Q52
  'KPTCL Stands for', //Q53
  'Bulb was invented by', //Q54
  'The responsibility of switching on/off the street lights lies with', //Q55
  'KREDL Stands for', //Q56
  'HESCOM stands for', //Q57
  'What do electricians wear while working with electricity?', //Q58
  'In which of the following devices is the electrical motor used?', //Q59
];

const answersList = [
  'Stay in your car', //Ans for Q1
  'True', //Ans for Q2
  'False', //Ans for Q3
  'False', //Ans for Q4
  'Stay clear and call the electric co-operative immediately.', //Ans for Q5
  'All of the above', //Ans for Q6
  'All of the Above', //Ans for Q7
  '186,300 miles per second (speed of light)', //Ans for Q8
  'Bare and dangerous to touch', //Ans for Q9
  '1908', //Ans for Q10
  'Not to be stored near electrical equipment that may cause a spark.', //Ans for Q11
  'In a house', //Ans for Q12
  'True', //Ans for Q13
  'False', //Ans for Q14
  'False', //Ans for Q15
  'False', //Ans for Q16
  'True', //Ans for Q17
  'All of the above', //Ans for Q18
  'True', //Ans for Q19
  'Call your local electric cooperative', //Ans for Q20
  'True', //Ans for Q21
  'Use insulated tools.', //Ans for Q22
  'LED light', //Ans for Q23
  'Notify your Concerned Substation Authority and they will retrieve the ball for you.', //Ans for Q24
  'Light electricity', //Ans for Q25
  'Solar radiation into electrical energy', //Ans for Q26
  'French physicist Edmond Becquerel', //Ans for Q27
  'Solar roof top photo voltaic', //Ans for Q28
  'Shivanasamudhra', //Ans for Q29
  '10-12-1917', //Ans for Q30
  'KPTCL', //Ans for Q31
  'KPTCL', //Ans for Q32
  'KPTCL & MESCOM', //Ans for Q33
  'Bengaluru', //Ans for Q34
  '15', //Ans for Q35
  '9', //Ans for Q36
  'Forbes transformer station', //Ans for Q37
  '50 Hz', //Ans for Q38
  '100000 Approx', //Ans for Q39
  'Karnataka', //Ans for Q40
  'Sidrapong,Darjeeling', //Ans for Q41
  '746', //Ans for Q42
  '1Phase 230V', //Ans for Q43
  'LT-2a', //Ans for Q44
  'Copper', //Ans for Q45
  'Oil', //Ans for Q46
  'Chamundeshwari Electricity Supply Corporation', //Ans for Q47
  'More Energy Efficiency', //Ans for Q48
  'Bangalore Electricity Supply Company', //Ans for Q49
  'All of the above', //Ans for Q50
  '1912', //Ans for Q51
  '1.4.2005', //Ans for Q52
  'Karnataka Power Transmission Corporation Ltd', //Ans for Q53
  'Thomas Alva Edison', //Ans for Q54
  'Muncipal/Panchayats', //Ans for Q55
  'Karnataka Renewable Energy Devolopment Ltd', //Ans for Q56
  'Hubli Elecrticty Supply Company', //Ans for Q57
  'Rubber handgloves', //Ans for Q58
  'All of the above', //Ans for Q59
];

const optionsList = [
  'Run', //Q1
  'Walk', //Q1
  'Crawl', //Q1
  'Stay in your car', //Q1

  'True', //Q2
  'False', //Q2
  'Cant say', //Q2
  'Dont know ', //Q2

  'True', //Q3
  'False', //Q3
  'Cant say', //Q3
  'Dont know ', //Q3

  'True', //Q4
  'False', //Q4
  'Cant say', //Q4
  'Dont know ', //Q4

  'Move it out of the way and call your local electric co-operative.', //Q5
  'Dont worry about it.', //Q5
  'Stay clear and call the electric co-operative immediately.', //Q5
  'Dont know', //Q5

  '120 volts', //Q6
  '240 volts', //Q6
  'More than 240 volts', //Q6
  'All of the above', //Q6

  'Metal', //Q7
  'Tree Limbs', //Q7
  'Human Body', //Q7
  'All of the Above', //Q7

  '120 MPH', //Q8
  '2,800 feet per second', //Q8
  '186,300 miles per second (speed of light)', //Q8
  'Dont know', //Q8

  'Bare and dangerous to touch', //Q9
  'Insulated and touchable', //Q9
  'Bare, but okay to touch', //Q9
  'Dont know', //Q9

  '1902', //Q10
  '1908', //Q10
  '1912', //Q10
  '1918', //Q10

  'Always be stored near electrical equipment that may cause a spark.', //Q11
  'Not to be stored near electrical equipment that may cause a spark.', //Q11
  'Dont know', //Q11
  'Cant say', //Q11

  'In a car', //Q12
  'In the middle of a field', //Q12
  'In a house', //Q12
  'Lying face down on the ground', //Q12

  'True', //Q13
  'False', //Q13
  'Cant say', //Q13
  'Dont know ', //Q13

  'True', //Q14
  'False', //Q14
  'Cant say', //Q14
  'Dont know ', //Q14

  'True', //Q15
  'False', //Q15
  'Cant say', //Q15
  'dont know ', //Q15

  'True', //Q16
  'False', //Q16
  'Cant say', //Q16
  'Dont know  ', //Q16

  'True', //Q17
  'False', //Q17
  'Cant say', //Q17
  'Dont know  ', //Q17

  'Curtains', //Q18
  'Clothing', //Q18
  'Combustible materials', //Q18
  'All of the above', //Q18

  'True', //Q19
  'False', //Q19
  'Cant say', //Q19
  'Dont know', //Q19

  'Pull on the string to get it loose', //Q20
  'Call your local electric cooperative', //Q20
  'Climb a nearby tree in order to reach it', //Q20
  'Dont know', //Q20

  'True', //Q21
  'False', //Q21
  'Cant say', //Q21
  'Dont know  ', //Q21

  'Wear jewelry.', //Q22
  'Use conductive ladders.', //Q22
  'Use insulated tools.', //Q22
  'Wear keys or key chains on your clothing. ', //Q22

  'LED light', //Q23
  'fluorescent lamp ', //Q23
  'CFL', //Q23
  'Sodium vapor lamp', //Q23

  'Climb the fence and Retrieve your ball.', //Q24
  'Forget about the ball. Consider it lost and go without it.', //Q24
  'Notify your Concerned Substation Authority and they will retrieve the ball for you.', //Q24
  'Dont know', //Q24

  'Sun-powered', //Q25
  'Light cells', //Q25
  'Light electricity', //Q25
  'Solar energy', //Q25

  'Chemical energy to electrical energy', //Q26
  'Solar radiation into electrical energy', //Q26
  'Solar radiation into thermal energy', //Q26
  'Thermal energy into electrical energy', //Q26

  'American physicist Enrico Fermi', //Q27
  'Italian physicist Alessandro Volta', //Q27
  'German physicist Heinrich Rudolf Hertz', //Q27
  'French physicist Edmond Becquerel', //Q27

  'Solar ray type photo voltaic', //Q28
  'Sun ray type photo voltaic', //Q28
  'Solar roof top photo voltaic', //Q28
  'Solar roof table photo voltaic', //Q28

  'Mysuru', //Q29
  'Bengaluru', //Q29
  'Shivanasamudhra', //Q29
  'Bellary', //Q29

  '10-12-1917', //Q30
  '02-06-1907', //Q30
  '06-12-1917', //Q30
  '17-12-1907', //Q30

  'KPTCL', //Q31
  'AP TRANSCO', //Q31
  'OPTCL', //Q31
  'KSEB', //Q31

  'KPTCL', //Q32
  'AP TRANSCO', //Q32
  'OPTCL', //Q32
  'KSEB', //Q32

  'KPTCL', //Q33
  'CESC', //Q33
  'BESCOM', //Q33
  'KPTCL & MESCOM', //Q33

  'Bengaluru', //Q34
  'Hyderabad', //Q34
  'Calcutta', //Q34
  'Mysuru', //Q34

  '25', //Q35
  '15', //Q35
  '40', //Q35
  '9', //Q35

  '9', //Q36
  '12', //Q36
  '15', //Q36
  '22', //Q36

  'Forbes transformer station', //Q37
  'Foreign transformer station', //Q37
  'Forbes transmission station', //Q37
  'Fakirappa transport station', //Q37

  '15 Hz', //Q38
  '50 Hz', //Q38
  '55 Hz', //Q38
  '65 Hz', //Q38

  '75000 Approx', //Q39
  '200000 Approx', //Q39
  '150000 Approx', //Q39
  '100000 Approx', //Q39

  'Andhra Pradesh', //Q40
  'Kerala', //Q40
  'Karnataka', //Q40
  'Tamilnadu', //Q40

  'Sidrapong,Darjeeling', //Q41
  'Shivanasamudhra', //Q41
  'Shimsha', //Q41
  'Raichur', //Q41

  '733', //Q42
  '746', //Q42
  '700', //Q42
  '780', //Q42

  '2 Phase 440V', //Q43
  '3Phase 440V', //Q43
  '1Phase 230V', //Q43
  'None of the Above', //Q43

  'LT-2b', //Q44
  'LT-2a', //Q44
  'HT-1', //Q44
  'HT-2', //Q44

  'Rubber', //Q45
  'Fibre', //Q45
  'Copper', //Q45
  'Plastic', //Q45

  'Copper', //Q46
  'Alluminium', //Q46
  'Oil', //Q46
  'Iron', //Q46

  'Calcutta Electricity Supply Company', //Q47
  'Chamundeshwari Electricity Supply Corporation', //Q47
  'Chennapatna Electricity Supply Company', //Q47
  'Chandigarh Electricity Supply Company', //Q47

  'Higher Price ', //Q48
  'More Energy Efficiency', //Q48
  'Heavy Weight', //Q48
  'All the above', //Q48

  'Bombay Electricity Supply Company', //Q49
  'Bruhat Electricity Supply Company', //Q49
  'Bangalore Electricity Supply Company', //Q49
  'Bihar Electricity Supply Company', //Q49

  'Mysore', //Q50
  'Madikeri and Chamrajnagar', //Q50
  'Mandya and Hassan', //Q50
  'All of the above', //Q50

  '1942', //Q51
  '1912', //Q51
  '1902', //Q51
  'None of the above', //Q51

  '1.4.2006', //Q52
  '1.4.2005', //Q52
  '1.1.2005', //Q52
  '1.6.2002', //Q52

  'Karnataka Power Transport Company Ltd', //Q53
  'Karnataka Power Transmission Corporation Ltd', //Q53
  'Karnataka Police Traffic Control League', //Q53
  'Kerala Power Transmission Corporation Ltd', //Q53

  'Einstein', //Q54
  'Faraday', //Q54
  'Thomas Alva Edison', //Q54
  'Jagadish Chandra Bose', //Q54

  'KPTCL', //Q55
  'Concerned ESCOMs', //Q55
  'PWD', //Q55
  'Muncipal/Panchayats', //Q55

  'Karnataka Road Electricity and Drainage Ltd', //Q56
  'Karnataka Renewable Energy Devolopment Ltd', //Q56
  'Kerala Road and Energy Devolopment Ltd', //Q56
  'Kempegowda Renewable Energy Department Ltd', //Q56

  'Hyderabad Elecrticty Supply Company', //Q57
  'Hubli Elecrticty Supply Company', //Q57
  'Himachal Elecrticty Supply Company', //Q57
  'Haryana Elecrticty Supply Company', //Q57

  'Rubber handgloves', //Q58
  'Woollen handgloves', //Q58
  'Synthetic handgloves ', //Q58
  'Cotton handgloves', //Q58

  'Electric fans', //Q59
  'Washing machine', //Q59
  'Refrigerator', //Q59
  'All of the above', //Q59
];

module.exports.questions = questionsList;
module.exports.answers = answersList;
module.exports.options = optionsList;

module.exports.getQuestionsTest = () => {
  console.log(`test`);
  let start = 0;
  let counter = 0;
  let QArray = [];
  for (let i = 0; i < questionsList.length; i++) {
    start = i;
    let optionIndex = start * 4;
    let questionObj = {
      question: questionsList[start],
      options: [
        optionsList[optionIndex],
        optionsList[optionIndex + 1],
        optionsList[optionIndex + 2],
        optionsList[optionIndex + 3],
      ],
      answer: answersList[start],
    };
    QArray.push(questionObj);
  }
  return QArray;
};

module.exports.getQuestions = () => {
  console.log(`test`);
  let start = 0;
  let counter = 0;
  let QArray = [];
  for (let i = 0; i < 10; i++) {
    start += parseInt(((Math.random() * 10) % 6) + 1);
    start = start % questionsList.length;
    let optionIndex = start * 4;
    let questionObj = {
      question: questionsList[start],
      options: [
        optionsList[optionIndex].trim(),
        optionsList[optionIndex + 1].trim(),
        optionsList[optionIndex + 2].trim(),
        optionsList[optionIndex + 3].trim(),
      ],
      answer: answersList[start].trim(),
    };
    QArray.push(questionObj);
  }
  return QArray;
};
// const Questions = [
//   {
//     question: 'Q1',
//     options: ['o1', 'o2', 'o3', 'o4'],
//     answer: 1,
//   },
// ];
