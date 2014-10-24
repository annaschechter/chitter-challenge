get '/users' do
	content_type :json
	users = User.all
    return users.to_json
end

# get '/users/:email' do
# end

post '/users' do
	@user = User.create(:name => params[:name],
						:user_name => params[:user_name],
		                :email => params[:email],
		                :password => params[:password])
	# if user.save
	# 	# session[:user_id] = @user.id
	# 	redirect '/'	
 #    else
	# 	flash[:errors] = ["This username or email is already taken"]
	# end 
end
