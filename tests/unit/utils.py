import os
import subprocess
import shlex
import logging

class DevOpsUtils:
    def __init__(self):
        self.log = logging.getLogger(self.__class__.__name__)

    def run_command(self, command):
        try:
            output = subprocess.check_output(shlex.split(command), stderr=subprocess.STDOUT)
            self.log.info(f"Command '{command}' executed successfully")
            return output.decode('utf-8')
        except subprocess.CalledProcessError as e:
            self.log.error(f"Command '{command}' failed with status code {e.returncode} and output:\n{e.output.decode('utf-8')}")
            raise

    def get_file_contents(self, filename):
        try:
            with open(filename, 'r') as f:
                return f.read()
        except FileNotFoundError:
            self.log.error(f"File '{filename}' not found")
            raise
        except Exception as e:
            self.log.error(f"Error reading file '{filename}': {e}")
            raise

    def create_directory(self, directory):
        try:
            os.makedirs(directory)
            self.log.info(f"Directory '{directory}' created")
        except FileExistsError:
            self.log.info(f"Directory '{directory}' already exists")
        except Exception as e:
            self.log.error(f"Error creating directory '{directory}': {e}")
            raise

    def remove_directory(self, directory):
        try:
            os.rmdir(directory)
            self.log.info(f"Directory '{directory}' removed")
        except FileNotFoundError:
            self.log.info(f"Directory '{directory}' not found")
        except Exception as e:
            self.log.error(f"Error removing directory '{directory}': {e}")
            raise