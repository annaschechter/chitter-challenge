
get '/sessions' do
	content_type :json
	@current_user =[session[:user_name], session[:name], session[:id]] 
    return @current_user.to_json
end

post '/sessions' do
	session[:name] = params[:name]
	session[:user_name] = params[:user_name]
	session[:id] = params[:id]
end

