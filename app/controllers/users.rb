get '/users' do
	content_type :json
    return {:users => User.all}.to_json
end

post '/users/new' do
	return {:users => User.all}.to_json
	# @user = User.create(:name => params[:name],
	# 					:user_name => params[:user_name],
	# 	                :email => params[:email],
	# 	                :password => params[:password])
	# if @user.save
	# 	session[:user_id] = @user.id
	# 	redirect '/'	
 #    else
	# 	flash[:errors] = ["This username or email is already taken"]
	# end 
	
end