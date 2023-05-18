using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using System.Configuration;
using CRUD_Op.Models;

namespace CRUD_Op.Controllers
{
    public class DonorController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();
            string query = @"select Donor_ID, Name, BloodGroup, Unit, Hospital, Phone, Status from donor";
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BBMS"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        public string Post(Donor pat)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"insert into donor(Name, BloodGroup, Unit, Hospital, Phone, Status) values ('" + pat.Name + @"','" + pat.BloodGroup + @"','" + pat.Unit + @"' , '" + pat.Hospital + @"','" + pat.Phone + @"','" + pat.Status + @"')";               
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

        public string Put(Donor pat)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"update donor set Name = '" + pat.Name + @"', BloodGroup= '" + pat.BloodGroup + @"', Unit='" + pat.Unit + @"', Hospital='" + pat.Hospital + @"', Phone='" + pat.Phone + @"', Status='" + pat.Status + @"' where Donor_ID =" + pat.Donor_ID + @" ";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BBMS"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                Update();

                return "Updated Successfully";
            }
            catch (Exception)
            {
                return "Failed to Update";
            }
        }
        public void Update()
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"UPDATE blood_stock SET Unit_Available = Unit_Available + donor.Unit FROM blood_stock INNER JOIN donor ON blood_stock.Blood_Group = donor.BloodGroup";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BBMS"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                Console.WriteLine("SUCCESSS");
                //return "Updated Successfully";
            }
            catch (Exception)
            {
                Console.WriteLine("FAILED");
               // return "Failed to Update";
            }
        }
       


        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @" delete from donor where Donor_ID =" + id;
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
