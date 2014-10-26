
get '/api/peeps' do
	content_type :json
	peeps = Peep.all
    return peeps.to_json
end

post '/api/peeps' do
	content_type :json
	peep = Peep.create(:message => params[:message],
		       :time_added => Time.now.strftime("%Y-%m-%d %H:%M:%S"),
		       :user_id => params[:user_id])
end
