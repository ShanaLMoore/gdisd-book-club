# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

current_book = Book.create(title:"My Answer is No . . . If That's Okay with You: How Women Can Say No and (Still) Feel Good About It", isbn:"B0012D1CV0", author:"Nanette Gartrell")
previous_book = Book.create(title:"Lean Out: The Struggle for Gender Equality in Tech and Start-Up Culture", isbn:"B015JWUC92", author:"Elissa Shevinsky")

job = Job.create(job_title:"software engineer", company_name:"Qualcomm", location:"San Diego, CA")