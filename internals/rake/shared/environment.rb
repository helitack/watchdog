ENV_SOURCE_FILE_LOCATION="#{Dir.home}/.watchdog_env"

def ensure_env_file_exists()
  if is_windows
    return
  end

  if File.exist?(ENV_SOURCE_FILE_LOCATION)
    unless File.exist?(".env")
      FileUtils.symlink(ENV_SOURCE_FILE_LOCATION, ".env")
    end
  else
    puts "Error: You are missing your #{ENV_SOURCE_FILE_LOCATION} file."
    return
  end
end