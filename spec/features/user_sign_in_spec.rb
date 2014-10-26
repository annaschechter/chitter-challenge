require 'spec_helper'

feature "User signs in" do

	before (:each) do 
		User.create(:name => "Anna",
						:user_name => "annaj",
		                :email => "jerofejeva.anna@yahoo.com",
		                :password => "blah")		
	end

	scenario "with correct credentials" do
		visit '/'
		expect(page).not_to have_content("You are signed in as annaj")
		sign_in("jerofejeva.anna@yahoo.com", "blah")
		expect(page).to have_content("You are signed in as annaj")
	end

	scenario "with incorrect credentials" do
		visit '/'
		expect(page).not_to have_content("You are signed in as annaj")
		sign_in("jerofejeva.anna@yahoo.com", "boom")
		expect(page).to have_content("The email or password is incorrect")
	end


	def sign_in(email, password)
		click_on "Log in"
		fill_in :email, :with => email
		fill_in :password, :with => password
		click_on "Sign In"
	end

end