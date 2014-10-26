get '/' do
	# @peeps = Peep.all:order => [:time_added.asc]
	erb :layout
end