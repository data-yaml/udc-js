from click.testing import CliRunner
from udc_py import hello
from pyagify.agify import GenderizeClient


def test_hello_world():
    runner = CliRunner()
    result = runner.invoke(hello, ["Peter"])
    assert result.exit_code == 0
    assert result.output == "Hello Peter!\n"

def test_agify_gender():
    client = GenderizeClient()
    gender = client.get_gender("Allen")
    assert gender == "male"
