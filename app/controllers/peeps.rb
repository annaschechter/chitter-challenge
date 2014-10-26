
get '/api/peeps' do
	content_type :json
	peeps = Peep.all
    return peeps.to_json
end

post '/api/peeps' do
	content_type :json
	post_time = (Time.now).strftime("%Y-%m-%d %H:%M")
	peep = Peep.create(:message => params[:message],
		       :time_added => post_time,
		       :user_id => params[:user_id])
end
