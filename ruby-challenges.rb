# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# pueudo code #
# set up an def and end def : detEvenOdd fuction to determine

# use "number" for the values \.

# use "number" for the values \

#  create a conditional .even? if and else 
num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
def detEvenOdd number 
    if number.even? 
        return  "#{number} is even" 
    else 
        return  "#{number} is odd"
    end
end 
# print my function with set values to determine odd or even 
p detEvenOdd num1
p detEvenOdd num2
p detEvenOdd num3
# //----end-----//
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# def unvowel to take the string 
#  let vowels = vowel letters
#  use delete and vowels to remove the vowels out of the string
beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
def unvowel string
    vowels = '[AaEeIiOoUu]' 
    string.delete vowels
end
 p unvowel beatles_album1
 #  "Rbbr Sl"
 p unvowel beatles_album2
 # "Sgt Pppr"
 p unvowel beatles_album3
# "bby Rd"
# //---end---//
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# // def stringmeth function
# // use string to input values
# // create a conditional we need the letters to match so we downcase
# // use reverse to see if they are the same word revesed 
# // if it doesnt match it will return 'this is not  a palindrome'
palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
def stringmeth string
    if string.downcase == string.downcase.reverse
        p "#{string}" 'this is a palindrome'
    else 
        p "#{string}" 'this is not  a palindrome'
 end
end

p stringmeth palindrome_tester1
"Racecarthis is a palindrome"
p stringmeth palindrome_tester2
"LEARNthis is not  a palindrome"
p stringmeth palindrome_tester3
"Rotatorthis is a palindrome"
# //--end--//

