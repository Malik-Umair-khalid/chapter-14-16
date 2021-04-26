// // *** Q : 1 ***

// var Arr = []

// // *** Q : 2 ***

// var Array = new Array()

// // *** Q : 3 ***

// var arr = []

// // *** Q : 4 ***

// var arr = [8 + 9]

// // *** Q : 5 ***

// var arr = [true + false]

// // *** Q : 6 ***

// var arr = [8 + 9 + true + false + "hello"]

// // *** Q : 7 ***

// var avalibleQualification = ["SSC" , "HSC" , "BSC" , "BS" , "B-com" , "MS" , "M.FILL" , "PHD"]

// document.write ('<h1>' + "Avalible Qualifications" + '</h1>')

// document.write('<ol>' +  '<li>' + '<p>' + avalibleQualification ["0"] + '</p>' + '</li>')
// document.write('<li>' + '<p>' + avalibleQualification ["1"] + '</p>' + '</li>')
// document.write('<li>' + '<p>' + avalibleQualification ["2"] + '</p>' + '</li>')
// document.write('<li>' + '<p>' + avalibleQualification ["3"] + '</p>' + '</li>')
// document.write('<li>' + '<p>' + avalibleQualification ["4"] + '</p>' + '</li>')
// document.write('<li>' + '<p>' + avalibleQualification ["5"] + '</p>' + '</li>')
// document.write('<li>' + '<p>' + avalibleQualification ["6"] + '</p>' + '</li>')
// document.write('<li>' + '<p>' + avalibleQualification ["7"] + '</p>' + '</li>' + '</ol>')

// // *** Q : 8 ***

// var student1Name = prompt("Enter Student 1 Name")
// var marks1obtained = +prompt(student1Name + "\n" + "Marks Obtained?")
// var student2Name = prompt("Enter Student 2 Name")
// var marks2obtained = +prompt(student2Name + "\n" + "Marks Obtained?")
// var student3Name = prompt("Enter Student 3 Name")
// var marks3obtained = +prompt(student3Name + "\n" + "Marks Obtained?")
// var totalMarks = 500
// var student1percentage = marks1obtained / totalMarks * 100
// var student2percentage = marks2obtained / totalMarks * 100
// var student3percentage = marks3obtained / totalMarks * 100

// var studentsNames = [student1Name , student2Name , student3Name]
// var marks = [marks1obtained , marks2obtained , marks3obtained]
// var percentages = [student1percentage , student2percentage ,student3percentage]

// document.write('<h1>' + "STUDENT ONE MARKSHEET" + '</h1>')
// document.write("Student Name" + "=" + studentsNames[0] + '<br>')
// document.write("Total Marks :" + 500  + '<br>')
// document.write("Marks Obtained :" + marks[0]  + '<br>')
// document.write("Percentage :" + percentages[0] + "%")

// document.write('<h1>' + "STUDENT TWO MARKSHEET" + '</h1>')
// document.write("Student Name" + "=" + studentsNames[1]  + '<br>')
// document.write("Total Marks :" + 500  + '<br>')
// document.write("Marks Obtained :" + marks[1]  + '<br>')
// document.write("Percentage :" + percentages[1] + "%"  + '<br>')

// document.write('<h1>' + "STUDENT THREE MARKSHEET" + '</h1>')
// document.write("Student Name" + "=" + studentsNames[2]  + '<br>')
// document.write("Total Marks :" + 500  + '<br>')
// document.write("Marks Obtained :" + marks[2]  + '<br>')
// document.write("Percentage :" + percentages[2] + "%")

//  *** Q : 9 ***

// var colorNames = ["Red" , "Green" , "Blue"]
// var addBegin =  prompt(colorNames + "\n" + "Which Colour Do you Want To Add In Begining")
// colorNames.unshift(addBegin)
// alert(colorNames)

// var colorNames = ["Red" , "Green" , "Blue"]
// var addEnd =  prompt(colorNames + "\n" + "Which Colour Do you Want To Add In Ending")
// colorNames.push(addEnd)
// alert(colorNames)

// colorNames.unshift("Pink" , "Brown" , "Cream")
// alert(colorNames)

// colorNames.shift()
// alert(colorNames)

// colorNames.pop()
// var indexTarget = +prompt(colorNames + "\n" + "Which Index Do You Want To Target on Above Line")
// var addColor = prompt(colorNames + "\n" + "What Color DO You Want TO Add On Your Index")
// colorNames.splice(indexTarget , 0 , addColor)
// alert(colorNames)

// var indexTarget = +prompt(colorNames + "\n" + "Which Index Do You Want To Target on Above Line")
// var deleteColor = +prompt(colorNames + "\n" + "How Many Colours Do You Want TO Dalete")
// colorNames.splice(indexTarget , deleteColor)
// alert(colorNames)

//  *** Q : 10 ***

// var score1 = +prompt("Enter The 1 Score")
// var score2 = +prompt("Enter The 2 Score")
// var score3 = +prompt("Enter The 3 Score")
// var score4 = +prompt("Enter The 4 Score")
// var score5 = +prompt("Enter The 5 Score")
// var score6 = +prompt("Enter The 6 Score")

// var scores = [score1 , score2 , score3 , score4 , score5 , score6]
// scores.sort()
// alert(scores)

// //  *** Q : 11 ***

// var city1 = prompt("Enter City 1 Name")
// var city2 = prompt("Enter City 2 Name")
// var city3 = prompt("Enter City 3 Name")
// var city4 = prompt("Enter City 4 Name")
// var city5 = prompt("Enter City 5 Name")
// var city6 = prompt("Enter City 6 Name")

// var cities = [city1 , city2 , city3 , city4 , city5 , city6]

// // *** Q : 15 ***
// var phones = ["Smasung" , "Motorola" , "Nokia" , "Sony" , "Haier"]
// document.write('<select>' )
// document.write( '<option>' + phones[0] + '</option>')
// document.write( '<option>' + phones[1] + '</option>')
// document.write( '<option>' + phones[2] + '</option>')
// document.write( '<option>' + phones[3] + '</option>')
// document.write( '<option>' + phones[4] + '</option>' + '</select>')