
namespace :gh do

  desc "app_greyhound: show log"
  task :log do
    sh("docker logs -f app-greyhound")
  end

  desc "app_greyhound: launch bash in container"
  task :bash do
    sh("docker exec -it app-greyhound bash")
  end

  desc "app_greyhound: restart service"
  task :restart do
    docker_rm("app-greyhound")
    sh("rake up")
  end

end