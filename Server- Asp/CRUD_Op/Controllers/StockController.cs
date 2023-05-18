using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http.Headers;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using CRUD_Op.Models;


namespace CRUD_Op.Controllers
{
    public class StockController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();
            string query = @"select Stock_ID, Blood_Group, Unit_Available from blood_stock";
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BBMS"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        public string Post(Stock pat)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"insert into blood_stock(Blood_Group, Unit_Available) values('" + pat.Blood_Group + @"','" + pat.Unit_Available + @"' )";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BBMS"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Added Successfully";
            }
            catch (Exception)
            {
                return "Failed to Add";
            }
        }
        public string Put(Stock pat)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"update blood_stock set Blood_Group = '" + pat.Blood_Group + @"', Unit_Available= '" + pat.Unit_Available + @"' where Stock_ID =" + pat.Stock_ID + @"";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BBMS"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Updated Successfully";
            }
            catch (Exception)
            {
                return "Failed to Update";
            }



        }
        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @" delete from blood_stock where Stock_ID =" + id;
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["bloodBankDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Deleted Successfully";
            }
            catch (Exception)
            {
                return "Failed to Delete";
            }



        }
    }
}
