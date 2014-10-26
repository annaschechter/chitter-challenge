# get '/peeps/new' do
# 	user = User.first(:id => session[:user_id])
# 	if user
# 		erb :"peeps/new"	
# 	else 
# 		flash[:errors] = ["You need to sign in to post on Chitter"]
# 		erb :"sessions/new"
# 	end
# end

get '/api/peeps' do
	content_type :json
	peeps = Peep.all
    return peeps.to_json
end

# post '/peeps' do
# 	user = User.first(:id => session[:user_id])
# 		if user
# 			peep = Peep.create(:message => params[:message],
# 					       :time_added => Time.now,
# 					       :user_id => user.id)
# 			redirect '/'
# 	    else
# 			redirect '/peeps/new'
# 		end
# end