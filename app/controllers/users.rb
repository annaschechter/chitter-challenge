get '/users' do
	content_type :json
	users = User.all
    return users.to_json
end

get '/users/:email/:password' do
	content_type :json
	email= params[:email] 
	password = params[:password]
	user = User.authenticate(email, password)
	return user.to_json
    # else
    # 	flash[:errors] = ["The email or password is incorrect"]
    # end
end 

post '/users' do
	content_type :json
	user = User.create(:name => params[:name],
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
