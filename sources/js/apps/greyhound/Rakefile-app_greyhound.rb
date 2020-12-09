
namespace :app_greyhound do

  desc "app_greyhound: show log"
  task :log do
    sh("docker logs -f #{SOLUTION_NAME}_app_greyhound_1")
  end

  desc "app_greyhound: launch bash in container"
  task :bash do
    sh("docker exec -it #{SOLUTION_NAME}_app_greyhound_1 bash")
  end

  desc "app_greyhound: restart service"
  task :restart do
    docker_rm("#{SOLUTION_NAME}_app_greyhound_1")
    sh("rake up")
  end

end