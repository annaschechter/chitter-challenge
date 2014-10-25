
get '/sessions' do
	content_type :json
	@current_user =[session[:user_name],session[:name]] 
    return @current_user.to_json
end

post '/sessions' do
	session[:name] = params[:name]
	session[:user_name] = params[:user_name]
end

