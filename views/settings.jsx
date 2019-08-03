var React = require("react");
var Layout = require("./layouts/layout");

var sha256 = require('js-sha256');
var SALT = 'bonk';


class Settings extends React.Component {
  render() {
    console.log("rendering settings.jsx")
    let cookies = this.props.cookies;
    let currentDate = new Date().toISOString().substring(0, 10);

    // let default_due_date = item.due_date.toISOString().replace(/T[\S\s]+/,'');
    // console.log(due_date_date)
    return (
        <Layout cookies={cookies}>
            <div className="row mainwrapper">
                <div className="col col-lg-8 offset-lg-2 col-sm-10 offset-sm-1 col-12">
                    <form className="card">
                        <div className="card-header bg-primary">Settings</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="pay-day-input">Pay Day:</label>
                                <input type="text" className="form-control" name="pay_day" id="pay-day-input" defaultValue={this.props.pay_day}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="next-pay-day-input"></label>
                                <input type="text" className="form-control" name="next_pay_day" id="next-pay-day-input" defaultValue={this.props.next_pay_day}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="pay-amount-input"></label>
                                <input type="text" className="form-control" name="pay_amount" id="pay-amount-input" defaultValue={this.props.pay_amount}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="save-amount-input"></label>
                                <input type="text" className="form-control" name="save_amount" id="save-amount-input" defaultValue={this.props.save_amount}/>
                            </div>
                            <button>submit placeholder</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>


    );
  }
}

module.exports = Settings;